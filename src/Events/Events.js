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
        save(){
            var value = this.refs.newTxt.value;
            alert(value);
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
        
        task_del () {
            alert('Нажата кнопка "Удалить"');
        };
        
        

    render(){
        if(this.state.edit){
            return this.rendEdit();
        }else{
            return this.rendNorm();
        }
       
        
    }
};

export default Events;