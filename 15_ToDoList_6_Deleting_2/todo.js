// filter -> 선택옵션
// boolean(참 거짓)을 이용한 함수sexyfilter를 만듦
// 그 안에 !== (not) 을 활용해서 우리가 삭제하고픈 애를 뺀 나머지만 return 하게 한다.
// fliter 함수를 사용 -> array에서 뭔가를 삭제할 때 실제로 array에서 지우는 게 아닌 
// 지우고 싶은 item을 빼고 새 array를 만듦(item을 지우는 게 아닌 item을 제외하는 것)

// -> 함수(sexyFilter)의 argument는 항상 달라도 상관 xx, 
// filter가 각 todos의 item을 todo의 argument로 넣어 줌

// 2. 
// 지우고 싶은 item을 빼고 새 array를 만들어
// 필터 함수를 사용한다.
// 필터는 forEach와 비슷해
// function sexyFilter(){}
// function sexyFilter(){return true} // array의 item을 유지하고 싶으면 true를 return!
// [1,2,3,4,5].filter(sexyFilter)
// (5) [1, 2, 3, 4, 5]
// function sexyFilter(){return false}
// [1,2,3,4,5].filter(sexyFilter)
// []

// 연습 1) item이 3이 아니면 true를 return!
// filter는 sexyFilter에 1,2,3,4를 넣어서 부를꺼야
// sexyFilter 함수는 반드시 true 리턴 해야함
// 만약 false를 리턴하면 그 item은 새 array에 포함되지 않을꺼야
// function sexyFilter(item){return item !== 3} -> item이 3이 아니면 true를 return!
// [1,2,3,4,5].filter(sexyFilter)
// (4) [1, 2, 4, 5]


// 연습 2) 바나나를 지우고 싶다면
// const arr = ["pizza", "banana","tomato"]
// function sexyFilter(food){return food !== "banana"}
// arr.filter(sexyFilter)
// sexyFilter 함수가 하는 일은 질문을 던지거나 혹은 item을 제외할지

// 연습 3) 1000보다 큰 수 지우기
// const arr = [1234, 5454, 223, 122, 45, 6775, 334]

// // 이제 1000보다 큰 수 지우기
// function sexyFuntion(potato){return potato <= 1000}
// arr.filter(sexyFuntion)


// 이제 toDos DB가 어떻게 생겼느지 생각해보자
const todos = [{"text":"a","id":1734669438007},{"text":"a","id":1734669440839},{"text":"a","id":1734669441639}]
// 이 id를 갖고 있는 todo를 삭제하고 싶어
function sexyFilter(todo){return todo.id !== 1734669438007}
todos.filter(sexyFilter)

// const todos = [{text:"lalala"}, {text:"lololo"}]
// function sexyFilter(todo){return todo.text != "lololo"}
// todos.filter(sexyFilter)
// [{…}]0: {text: 'lalala'} length: 1 [[Prototype]]: Array(0)


