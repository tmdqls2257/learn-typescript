{
  /**
   * Enum
   * 여러가지에 관련된 상수 값들을 한 곳에 모아서 정의할 수 있게 도와주는 타입
   */

  // JavaScript
  const MAX_NUM =6;// 고정 값들을 나타낼 때 대문자로 사용
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  // ENUM에 가깝게 표현하는 방법
  const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY": 1, "WEDNESDAY":2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  enum Days{
    Monday, // 0 
    // 1부터 시작하고 싶으면 Monday = 1
    // Monday = 'monday'처럼 문자열도 가능하다 단 수동적으로 모두 할당해줘야한다.
    Tuesday,// 1
    Friday,// 2
    Saturday,// 3
    Sunday, // 4
  }
  //enum의 문제는 타입이 지정된 변수에 다른 숫자도 할당할 수 있다는 문제가 있습니다.
  console.log(Days.Friday);
  let day = Days.Saturday;
  day = 1;
  console.log(day);

  type dayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
  let DayOfweek: dayOfWeek = 'Monday';
  
}