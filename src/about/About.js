import React from 'react';
import { Content } from '../Components'
import CVPicture from './photo.jpg'

export default class About extends React.Component {
    render() {
        return (
            <Content className={"about"}>
                <div id="profilepic">
                    <img src={CVPicture} alt='Jonathan'/>
                </div>
                <div id="profile">
                    <h3>Game Designer</h3>
                    <p>
                        Video games have always been a part of my life. I have been gaming since I was 10 years old. In 2012 I started on
                        GameIT College, where my game development journey started. I learned to write code and focused on
                        programming. I have experience with hardware, with Arduino and Raspberry Pi, and various sensors. This
                        affords me to create custom hardware for the games I make (i.e. Guitar Hero controller). After this,
                        especially when I started at the IT-University of Copenhagen, I got into game design. It was a lot more
                        interesting, as dealing with people was a lot more unpredictable. With my strong background in
                        programming, it places me as a strong core gameplay designer as I'm able to quickly prototype new games.
                        In my future I'd like to get better at graphics and statistics/data analysis to become a better game
                        designer.qweqwe
                    </p>
                    <p>
                        In my spare time, I make games, play guitar and piano, hang with friends, read, and
                        enjoy snowboarding when possible.
                    </p>
                    <div id="cv">
                        <a href="/about/Resume Jonathan Hertz.pdf">Get PDF version of my resume here</a>
                        <h5>Jobs</h5>
                        <ul>
                            <li>Founder & Game Developer, Quack People - 2024-Current</li>
                            <li>Netcode Engineer, Unity Technologies - 2024-Current</li>
                            <li>Software Developer in Quality, Unity Technologies - 2022-2024</li>
                            <li>Associate Software Developer, IBM Client Innovation Center - 2021-2022</li>
                            <li>QA Student Worker, Unity Technologies - 2020-2021</li>
                            <li>Lead Game Designer for <a href="/#/pacha">Pacha</a>, DADIU - 2020 Fall</li>
                            <li>Teaching Assistant, IT-University of Copenhagen - 2018-2020</li>
                            <li>Volunteer, Coding Pirates - 2017-2018</li>
                            <li>Board Member, ITU Innovators - 2016-2017</li>
                            <li>Tournament Organizer, ITU LAN - 2016-2017</li>
                            <li>Student worker, SDC - 2015-2016</li>
                        </ul>
                        <h5>Education</h5>
                        <ul>
                            <li>MSc. Games (Design), IT-University of Copenhagen - 2019-2021</li>
                            <li>BSc. Digital Media and Design, IT-Universitetet - 2016-2019</li>
                            <li>GameIT College, Grenå Higher Technical Exam - 2012-2015</li>
                        </ul>
                        <h5>Competencies</h5>
                        <ul>
                            <li>Unity, Unreal Engine, Godot, GameMaker</li>
                            <li>Netcode, physics, gameplay, systems, game AI</li>
                            <li>Platform support (PlayStation, Xbox, Switch, Mobile), bug debugging and fixing, performance optimization, tool development, store integrations</li>
                            <li>Game design, system design, level design, prototyping, rational game design, balancing, playtesting, data-driven design</li>
                            <li>Various UX design processes, including interaction design, design thinking, co-design, usertests, concept development, data gathering (surveys, interviews, observations), play design, and locative media design</li>
                            <li>Web Design with Bootstrap, jQuery, Node.js, and React</li>
                            <li>Proficiency with electronics, including Arduino, Tessel 2, Raspberry Pi, and various sensors</li>
                        </ul>
                    </div>
                </div>
            </Content>
        );
    }
}