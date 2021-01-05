import React, { Component } from 'react';

class Resume extends Component {

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><a href={work.website} target="_blank"><h3>{work.company}</h3></a>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })

      var skills = this.props.data.skills.map((skills)=>{
        var className = 'bar-expand '+skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{width:skills.level, backgroundColor:this.getRandomColor()}}className={className}></span><em>{skills.name}</em>
          </li>
        )
      })

      var programmingLang = this.props.data.programming_lang.map((skills)=>{
        var className = 'bar-expand '+skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{width:skills.level, backgroundColor:this.getRandomColor()}}className={className}></span><em>{skills.name}</em>
          </li>
        )
      })

      var scriptingLang = this.props.data.scripting_lang.map((skills)=>{
        var className = 'bar-expand '+skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{width:skills.level, backgroundColor:this.getRandomColor()}}className={className}></span><em>{skills.name}</em>
          </li>
        )
      })

      var framework = this.props.data.framework.map((skills)=>{
        var className = 'bar-expand '+skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{width:skills.level, backgroundColor:this.getRandomColor()}}className={className}></span><em>{skills.name}</em>
          </li>
        )
      })

      var database = this.props.data.database.map((skills)=>{
        var className = 'bar-expand '+skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{width:skills.level, backgroundColor:this.getRandomColor()}}className={className}></span><em>{skills.name}</em>
          </li>
        )
      })
    }

    return (
        <section id="resume">
            <div className="row work">
                <div className="three columns header-col">
                    <h1><span>Work</span></h1>
                </div>
                <div className="nine columns main-col">
                    {work}
                </div>
            </div>

            <div className="row education">
                <div className="three columns header-col">
                    <h1><span>Education</span></h1>
                </div>
                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                            {education}
                        </div>
                    </div>
                </div>
            </div>

        {/* <div className="row skill">
            <div className="three columns header-col">
                <h1><span>Skills</span></h1>
            </div>
            <div className="nine columns main-col">
                // <p>{skillmessage}</p>
                <div className="bars">
                <ul className="skills">
                    {skills}
                </ul>
            </div>
        </div>
        </div> */}
        <div className="row education">
            <div className="four columns header-col">
                <h1><span>Programming Languages</span></h1>
            </div>
            <div className="eight columns main-col">
                {/* <p>{skillmessage}</p> */}
                <div className="bars">
                    <ul className="skills">
                        {programmingLang}
                    </ul>
                </div>
            </div>
        </div>
        <div className="row education">
            <div className="four columns header-col">
                <h1><span>Scripting Languages</span></h1>
            </div>
            <div className="eight columns main-col">
                {/* <p>{skillmessage}</p> */}
                <div className="bars">
                    <ul className="skills">
                        {scriptingLang}
                    </ul>
                </div>
            </div>
        </div>
        <div className="row education">
            <div className="three columns header-col">
                <h1><span>Framework</span></h1>
            </div>
            <div className="nine columns main-col">
                {/* <p>{skillmessage}</p> */}
                <div className="bars">
                    <ul className="skills">
                        {framework}
                    </ul>
                </div>
            </div>
        </div>
        <div className="row skill">
            <div className="three columns header-col">
                <h1><span>Database</span></h1>
            </div>
            <div className="nine columns main-col">
                {/* <p>{skillmessage}</p> */}
                <div className="bars">
                    <ul className="skills">
                        {database}
                    </ul>
                </div>
            </div>
        </div>
   </section>
    );
  }
}

export default Resume;
