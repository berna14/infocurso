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
      <Part name={props.part1.name} ejercicios={props.part1.exercises} />
      <Part name={props.part2.name} ejercicios={props.part2.exercises} />
      <Part name={props.part3.name} ejercicios={props.part3.exercises} />
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
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <h1>
        <Header course={course} />
      </h1>
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
        exercises1={part1.exercises}
        exercises2={part2.exercises}
        exercises3={part3.exercises}
      />
      <Total
        exercises1={part1.exercises}
        exercises2={part2.exercises}
        exercises3={part3.exercises}
      />
    </div>
  );
};

export default App;
