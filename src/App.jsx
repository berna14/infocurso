import "./App.css";

const Part = (props) => {
  return (
    <div>
      <p>
        Name: {props.name}. Excercises in this part: {props.ejercicios}
      </p>
    </div>
  );
};

const Header = (props) => {
  return (
    <div>
      <p>Course name: {props.course}</p>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part name={props.parts1} ejercicios={props.exercises1} />
      <Part name={props.parts2} ejercicios={props.exercises2} />
      <Part name={props.parts3} ejercicios={props.exercises3} />
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>
        Total exercises:{" "}
        {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </div>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <h1>
        <Header course={course.name} />
      </h1>
      <Content
        parts1={course.parts[0].name}
        parts2={course.parts[1].name}
        parts3={course.parts[2].name}
        exercises1={course.parts[0].exercises}
        exercises2={course.parts[1].exercises}
        exercises3={course.parts[2].exercises}
      />
      <Total
        exercises1={course.parts[0].exercises}
        exercises2={course.parts[1].exercises}
        exercises3={course.parts[2].exercises}
      />
    </div>
  );
};

export default App;
