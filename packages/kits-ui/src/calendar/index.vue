<template>
  <div class="k-calendar">
    <div class="k-calender-setting">
      <div class="k-calender-date">{{ currentDateString }}</div>
      <div class="k-calender-selector">
        <div class="prev" @click="selectDate('prev-month')">&lt;</div>
        <div class="current">{{ currentMonth }}月</div>
        <div class="next" @click="selectDate('next-month')">&gt;</div>
      </div>
    </div>
    <table class="k-calendar-core">
      <thead>
        <tr class="k-calendar-header">
          <th v-for="d in weekHeadDays" :key="d" class="k-calendar-header-item">{{ d }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rdx) in rows" :key="rdx" class="day-row">
          <td
            v-for="(cell, cdx) in row"
            :key="cdx"
            :class="getCellClass(cell)"
            @click="handleDayPicker(cell)"
          >
            <slot name="date-cell" :data="getSlotData(cell)">
              {{ cell.text }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

const WEEK_DAYS = ['日', '一', '二', '三', '四', '五', '六'];
type CalendarDateType = 'prev-month' | 'next-month' | 'prev-year' | 'next-year' | 'today';
type CalenderDateCellType = 'prev' | 'current' | 'next';
export interface CalenderDateCell {
  text: number;
  type: CalenderDateCellType;
}

export default defineComponent({
  props: {
    modelValue: {
      type: Date,
      default: new Date(),
    },
    firstDay: {
      type: Number,
      default: 0,
    },
  },
  emits: ['update:modelValue', 'onChange'],
  setup(props, { emit }) {
    const firstDayofWeek = props.firstDay || dayjs().startOf('week').day();
    // 星期几排列，取决于用户选择，默认周日开始，也可以周一等
    const weekHeadDays = computed(() => [
      ...WEEK_DAYS.slice(firstDayofWeek),
      ...WEEK_DAYS.slice(0, firstDayofWeek),
    ]);
    // 初始化的日期
    const date = computed(() => {
      if (!props.modelValue) {
        return dayjs();
      }
      return dayjs(props.modelValue);
    });
    const selectedDay = ref<Dayjs>();
    // 二维数组，6 行 7 列
    const rows = computed(() => {
      let days: CalenderDateCell[] = [];
      const firstDay = date.value.startOf('month').day();
      const lastDay = date.value.subtract(1, 'month').endOf('month').date();
      const lastMonthDaysRemaining = firstDay - firstDayofWeek;
      const currentMonthDays = date.value.daysInMonth();
      const preMonthDays: CalenderDateCell[] = Array.from({ length: lastMonthDaysRemaining })
        .map((v, idx) => lastDay - (lastMonthDaysRemaining - idx - 1))
        .map((v) => ({
          text: v,
          type: 'prev',
        }));
      const curMonthDays: CalenderDateCell[] = Array.from({ length: currentMonthDays }).map(
        (v, idx) => ({
          text: idx + 1,
          type: 'current',
        }),
      );
      days = [...preMonthDays, ...curMonthDays];
      const nextMonthDaysRemaining = 42 - days.length;
      const nextMonthDays: CalenderDateCell[] = Array.from({ length: nextMonthDaysRemaining }).map(
        (v, idx) => ({
          text: idx + 1,
          type: 'next',
        }),
      );
      days.push(...nextMonthDays);
      return Array.from({ length: 6 }).map((v, idx) => {
        const start = idx * 7;
        return days.slice(start, start + 7);
      });
    });
    // 选择月份的时候切换到默认日期
    const prevMonthDayjs = computed(() => date.value.subtract(1, 'month').date(1));
    const nextMonthDayjs = computed(() => date.value.add(1, 'month').date(1));
    const prevYearDayjs = computed(() => date.value.subtract(1, 'year').date(1));
    const nextYearDayjs = computed(() => date.value.add(1, 'year').date(1));
    const pickDay = (day: Dayjs) => {
      selectedDay.value = day;
      emit('update:modelValue', day.toDate());
    };
    // 上方配置的切换月份、年份
    const selectDate = (type: CalendarDateType) => {
      const dateMap: Record<CalendarDateType, Dayjs> = {
        'prev-month': prevMonthDayjs.value,
        'next-month': nextMonthDayjs.value,
        'prev-year': prevYearDayjs.value,
        'next-year': nextYearDayjs.value,
        today: dayjs(),
      };
      const day = dateMap[type];
      console.log('hello', day);
      if (!day.isSame(date.value, 'day')) {
        emit('onChange', {
          type,
          date: day.toDate(),
        });
        pickDay(day);
      }
    };
    const formateDate = (text: number, type: CalenderDateCellType): Dayjs => {
      switch (type) {
        case 'prev':
          return date.value.startOf('month').subtract(1, 'month').date(text);
        case 'current':
          return date.value.date(text);
        case 'next':
          return date.value.startOf('month').add(1, 'month').date(text);
        default:
          return date.value.date(text);
      }
    };
    // 点击单个日子更新当前的数据
    const handleDayPicker = ({ text, type }: CalenderDateCell) => {
      const day: Dayjs = formateDate(text, type);
      console.log(day);
      emit('onChange', {
        type: 'selectDate',
        date: day.toDate(),
      });
      pickDay(day);
    };
    // 当前表头显示的日期
    const currentMonth = computed(() => date.value.month() + 1);
    const currentDateString = computed(
      () => `${date.value.year()}年${date.value.month() + 1}月${date.value.date()}日`,
    );
    // 当前日期的所属类
    const getCellClass = ({ text, type }: CalenderDateCell) => {
      console.log(text);
      const classList: string[] = ['day-cell', type];
      if (type === 'current') {
        const cellDate = formateDate(text, type);
        if (cellDate.isSame(selectedDay.value, 'day')) {
          classList.push('selected');
        }
      }
      return classList;
    };
    const getSlotData = ({ text, type }: CalenderDateCell) => {
      const day: Dayjs = formateDate(text, type);
      return {
        type,
        isSelected: day.isSame(selectedDay.value, 'day'),
        day: day.format('YYYY-MM-DD'),
        date: day.toDate(),
      };
    };
    return {
      weekHeadDays,
      rows,
      selectDate,
      handleDayPicker,
      currentDateString,
      currentMonth,
      getCellClass,
      getSlotData,
    };
  },
});
</script>
