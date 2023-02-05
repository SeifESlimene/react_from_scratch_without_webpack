 // const { Remarkable } = window.remarkable
 const root = document.getElementById('root');
 // class MarkdownEditor extends React.Component {
 //   constructor(props) {
 //     super(props);
 //     this.md = new Remarkable();
 //     this.handleChange = this.handleChange.bind(this);
 //     this.state = { value: 'Hello, **world**!' };
 //   }

 //   handleChange(e) {
 //     this.setState({ value: e.target.value });
 //   }

 //   getRawMarkup() {
 //     return { __html: this.md.render(this.state.value) };
 //   }

 //   render() {
 //     return (
 //       <div className="MarkdownEditor">
 //         <h3>Input</h3>
 //         <label htmlFor="markdown-content">
 //           Enter some markdown
 //         </label>
 //         <textarea
 //           id="markdown-content"
 //           onChange={this.handleChange}
 //           defaultValue={this.state.value}
 //         />
 //         <h3>Output</h3>
 //         <div
 //           className="content"
 //           dangerouslySetInnerHTML={this.getRawMarkup()}
 //         />
 //       </div>
 //     );
 //   }
 // }

 // ReactDOM.render(<MarkdownEditor />, root);
 // class TodoApp extends React.Component {
 //   constructor(props) {
 //     super(props);
 //     this.state = { items: [], text: '' };
 //     this.handleChange = this.handleChange.bind(this);
 //     this.handleSubmit = this.handleSubmit.bind(this);
 //   }
 //   render() {
 //     return (
 //       <div>
 //         <h3>TODO</h3>
 //         <TodoList items={this.state.items} />
 //         <form onSubmit={this.handleSubmit}>
 //           <label htmlFor="new-todo">
 //             What needs to be done?
 //           </label>
 //           <input
 //             id="new-todo"
 //             onChange={this.handleChange}
 //             value={this.state.text}
 //           />
 //           <button>
 //             Add #{this.state.items.length + 1}
 //           </button>
 //         </form>
 //       </div>
 //     );
 //   }
 //   handleChange(e) {
 //     this.setState({ text: e.target.value });
 //   }
 //   handleSubmit(e) {
 //     e.preventDefault();
 //     if (this.state.text.length === 0) {
 //       return;
 //     }
 //     const newItem = {
 //       text: this.state.text,
 //       id: Date.now()
 //     };
 //     this.setState(state => ({
 //       items: state.items.concat(newItem),
 //       text: ''
 //     }));
 //   }
 // }
 // class TodoList extends React.Component {
 //   render() {
 //     return (
 //       <ul>
 //         {this.props.items.map(item => (
 //           <li key={item.id}>{item.text}</li>
 //         ))}
 //       </ul>
 //     );
 //   }
 // }
 // ReactDOM.render(<TodoApp />, root);
 class Timer extends React.Component {
   constructor(props) {
     super(props);
     this.state = { seconds: 0 };
   }
   tick() {
     this.setState(state => ({
       seconds: state.seconds + 1
     }));
   }
   componentDidMount() {
     this.interval = setInterval(() => this.tick(), 1000);
   }
   componentWillUnmount() {
     clearInterval(this.interval);
   }
   render() {
     return (
       <div>
         Seconds: {this.state.seconds}
       </div>
     );
   }
 }
 ReactDOM.render(<Timer />, root);
 // var e = React.createElement;
 // function TodoItem(props) {
 //   return e("li", null, props.text);
 // }
 // var TodoApp = createReactClass({
 //   getInitialState: function() {
 //     return { items: [], text: "" };
 //   },
 //   handleEditInput: function(evt) {
 //     this.setState({ text: evt.target.value });
 //   },
 //   handleSubmit: function(evt) {
 //     evt.preventDefault();
 //     if (!this.state.text.length) return;
 //     debugger
 //     this.setState(function(prevState) {
 //       return {
 //         items: prevState.items.concat({
 //           id: Math.random() + "",
 //           text: prevState.text
 //         }),
 //         text: ""
 //       };
 //     });
 //   },
 //   render: function() {
 //     return e("div", null, [
 //       e("h1", { key: "title" }, "To Do List"),
 //       e("input", {
 //         key: "input",
 //         type: "text",
 //         value: this.state.text,
 //         onChange: this.handleEditInput
 //       }),
 //       e(
 //         "button",
 //         { key: "add-todo-btn", onClick: this.handleSubmit },
 //         "Add ToDo"
 //       ),
 //       e(
 //         "ul",
 //         { key: "todos" },
 //         this.state.items.map(item =>
 //           e(TodoItem, { key: item.id, text: item.text })
 //         )
 //       )
 //     ]);
 //   }
 // });
 // ReactDOM.render(e(TodoApp), document.getElementById("root"));
 // let name = "John"
 // class Greeting extends React.Component {
 //  handleClick(e) {
 //    e.preventDefault();
 //    console.log(e.target.value);
 //  }
 //   render() {
 //     return React.createElement('div', null, `Hello ${this.props.name}`);
 //   }
 // }
 // function Greeting() {
 //   return React.createElement('div', null, `Hello ${name}`);
 // }
 // const Greeting = createReactClass({
 //   handleClick: function(e) {
 //     e.preventDefault();
 //    console.log(e.target.value);
 //   },
 //   render: function() {
 //     return React.createElement("div", null, `Hello ${name}`);
 //   }
 // });
 // const root = document.getElementById('root');
 // ReactDOM.render(React.createElement(Greeting, { name }, null), root);
 // ReactDOM.render(React.createElement(Greeting, { name }, null), root);
 // const isValidElement = React.isValidElement(React.createElement(Greeting, { name }, null));
 // const isValidAnotherElement = React.isValidElement(Greeting);
 // console.log({ isValidElement, isValidAnotherElement });