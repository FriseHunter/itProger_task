import React, {Component} from 'react';
import './Events.css';




class Events extends Component{
    constructor(props){
        super(props);
         this.state = {
                edit:false
            }
            this.save = this.save.bind(this);
            this.edit = this.edit.bind(this);
            this.rendEdit = this.rendEdit.bind(this);
            this.rendNorm = this.rendNorm.bind(this);
            this.task_del = this.task_del.bind(this);
        }
        edit(){
            this.setState({edit:true});
        }
        task_del () {
           this.props.del (this.props.index);
        }
        save(){
            this.props.upp (this.refs.newTxt.value, this.props.index)
            this.setState({
                edit: false,
            });
        };

        rendEdit(){
            return(
                <div className='box'>
                    <textarea ref="newTxt" className="editArea" defaultValue={this.props.children}></textarea>
                    <button onClick={this.save} className='btn btnLinear'>Сохранить</button>
                </div>
            );
        };
        rendNorm(){
            return(
                <div className='box'>
                    <div className="text">{this.props.children}</div>
                    <button onClick={this.edit} className='btn btnLinear'>Редакктировать</button>
                    <button onClick={this.task_del} className='btn btnSolid'>Удалить</button>
                </div>
            );
        };
    render(){
        if(this.state.edit){
            return this.rendEdit();
        }else{
            return this.rendNorm();
        }


    }
};

class Field extends Component{
  constructor(props){
    super(props);
    this.state = {
      tasks: []

    };
    this.uppTxt = this.uppTxt.bind(this);
    this.delBlock = this.delBlock.bind(this);
    this.add = this.add.bind(this);

  }
  add = (text) => {
    var arr = this.state.tasks;
    arr.push(text);
    this.setState ({tasks: arr});
  }
  delBlock = (i) => {
    var arr = this.state.tasks;
    arr.splice(i, 1);
    this.setState({tasks: arr});
  }
  uppTxt = (text, i) => {
    var arr = this.state.tasks;
    arr[i] = text;
    this.setState ({tasks: arr});
  }
  eachTask = (item, i) => {
    return(<Events key={i} index={i} upp={this.uppTxt} del={this.delBlock}>
      {item}
      </Events>);
  };
  render(){
    return(
      <div className='t-a-c'>
        {
          this.state.tasks.map(this.eachTask)
        }
        <button onClick={this.add.bind(null, 'Простое задание')} className='btn btnLinear'>Создать задачу</button>
      </div>
    )
  }
}

export default Field;
