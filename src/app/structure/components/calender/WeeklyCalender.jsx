import moment from "jalali-moment";
import Typography from "../typography/Typography";
import ArrowIcon from "../icon/custom/ArrowIcon";
import { useEffect, useState } from "react";

const WeeklyCalender = (props) => {
  const { value, onChange, ...rest } = props;

  const [year, setYear] = useState("");
  const [mount, setMount] = useState("");
  const [week, setWeek] = useState("");
  const [days, setDays] = useState([]);
  const [currentWeek, setCurrentWeek] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const monthNames = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];

  useEffect(() => {
    moment.updateLocale("fa", {
      weekdays: [
        "شنبه",
        "یکشنبه",
        "دوشنبه",
        "سه‌شنبه",
        "چهارشنبه",
        "پنجشنبه",
        "جمعه",
      ],
    });

    const currentDate = moment();
    setYear(currentDate.jYear());
    setMount(currentDate.jMonth());

    // شروع ماه فعلی
    const startOfMonth = currentDate.clone().startOf("jMonth");
    const endOfMonth = currentDate.clone().endOf("jMonth");

    // محاسبه روزهای ماه
    const daysInMonth = [];
    let day = startOfMonth.clone();

    while (day.isBefore(endOfMonth) || day.isSame(endOfMonth, "day")) {
      daysInMonth.push({
        dayDate: day.locale("fa").format("L"),
        dayName: day.locale("fa").format("dd"),
        dayNumber: day.locale("fa").format("D"),
        isToday: day.isSame(currentDate, "day"),
      });
      day.add(1, "day");
    }

    // تقسیم روزها به هفته‌ها
    const weeks = [];
    for (let i = 0; i < daysInMonth.length; i += 7) {
      weeks.push(daysInMonth.slice(i, i + 7));
    }

    setDays(weeks);

    // پیدا کردن هفته فعلی
    const currentWeekIndex = weeks.findIndex((week) =>
      week.some((day) => day.isToday)
    );

    setCurrentIndex(currentWeekIndex);
    setCurrentWeek(weeks[currentWeekIndex]);
    setWeek(getWeekLabel(currentWeekIndex));
  }, []);

  const getWeekLabel = (index) => {
    const weekLabels = ["اول", "دوم", "سوم", "چهارم", "پنجم", "ششم"];
    return weekLabels[index] || "";
  };

  useEffect(() => {
    if (days.length > 0) {
      setCurrentWeek(days[currentIndex]);
      setWeek(getWeekLabel(currentIndex));
    }
  }, [currentIndex, days]);

  const handleNextWeek = () => {
    if (currentIndex < days.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevWeek = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between mb-5">
        <div
          onClick={handlePrevWeek}
          className="flex items-center gap-x-2 cursor-pointer rounded-3xl p-2"
          style={{
            boxShadow: "0px 0px 4.4px 2px #0000001A",
          }}
        >
          <ArrowIcon />
          <Typography className="text-sm font-normal text-secondary-500">
            هفته قبل
          </Typography>
        </div>
        <div
          className="p-2 w-[214px] rounded-3xl flex justify-center items-center text-md text-gray-400 font-semibold"
          style={{
            boxShadow: "0px 0px 4.4px 2px #0000001A inset",
          }}
        >
          ` هفته {week} {monthNames[mount]} ماه {year} `
        </div>
        <div
          onClick={handleNextWeek}
          className="flex items-center gap-x-2 cursor-pointer rounded-3xl p-2"
          style={{
            boxShadow: "0px 0px 4.4px 2px #0000001A",
          }}
        >
          <Typography className="text-sm font-normal text-secondary-500">
            هفته بعد
          </Typography>
          <div className="rotate-[180deg]">
            <ArrowIcon />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-between overflow-scroll [&::-webkit-scrollbar]:hidden">
        {currentWeek?.map((day) => (
          <div
            key={day.dayDate}
            className={`inline cursor-pointer text-center ${
              value === day?.dayDate
                ? "rounded-full border bg-secondary-500 "
                : ""
            } p-1`}
            onClick={() => onChange(day?.dayDate)}
          >
            <Typography
              className={`${
                day?.dayName === "ج"
                  ? value === day?.dayDate
                    ? "text-white"
                    : "text-secondary-500"
                  : value === day?.dayDate
                  ? "text-white"
                  : day?.isToday
                  ? "text-primary-500"
                  : "text-gray-500"
              }`}
            >
              {day?.dayName}
            </Typography>
            <Typography
              className={`${
                value === day?.dayDate
                  ? "rounded-full bg-white text-center text-secondary-500"
                  : day?.isToday
                  ? "text-primary-500"
                  : "text-gray-500"
              } mt-3 flex h-8 w-8 items-center justify-center font-bold`}
            >
              {day?.dayNumber}
            </Typography>
          </div>
        ))}
      </div>
    </>
  );
};

export default WeeklyCalender;
