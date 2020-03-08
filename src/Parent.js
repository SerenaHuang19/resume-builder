
import React from 'react';

// import Education from './Education.js';
import Education from './Components/Education/Education.js';
import Skills from './Components/Skills/Skills.js';
// import Experience from './Components/Experience/Education.js';
// import Projects from './Components/Projects/Education.js';
// import Extracurriculars from './Components/Extracurriculars/Extracurriculars.js';
import GeneratedResume from './Components/GeneratedResume/GeneratedResume.js';
import { Stepper, Step, StepLabel, Button, Container } from '@material-ui/core';
import { PDFViewer } from '@react-pdf/renderer';

import './styles.css';

class Parent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeStep: 1,
            steps: ['Education', 'Skills', 'Experience', 'Projects', 'Extracurriculars', 'Generate!'],
            educationChanges: {},
            skillChanges: {},
        }
        this.handlePrev = this.handlePrev.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async handlePrev() {
        const activeStep = this.state.activeStep - 1;
        await this.setState({ ...this.state, activeStep });
    }

    async handleNext() {
        const activeStep = this.state.activeStep + 1;
        console.log('activeStep', activeStep)
        await this.setState({ ...this.state, activeStep });
    }

    async handleChange(step, changes) {
        if (step === 0) {
            const educationChanges = { ...this.state.educationChanges };
            Object.keys(changes).map(changedAttribute => {
                educationChanges[changedAttribute] = changes[changedAttribute];
            });
            console.log('skillChanges')
            return await this.setState({ ...this.state, educationChanges });
        } else if (step === 1) {
            const skillChanges = { ...this.state.educationChanges };
            Object.keys(changes).map(changedAttribute => {
                console.log('skillChanges')
                skillChanges[changedAttribute] = changes[changedAttribute];
            });
            return await this.setState({ ...this.state, skillChanges });
        } else if (step === 2) {

        }

        
    }

    async handleSubmit() {

    }

    render() {
        const { state } = this;
        return <React.Fragment>
            <Container>
                <Stepper activeStep={state.activeStep} alternativeLabel>
                    {state.steps.map(label => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <Button disabled={state.activeStep < 1} onClick={this.handlePrev}>Prev</Button>
                <Button disabled={state.activeStep > 4} onClick={this.handleNext}>Next</Button>
                {/* <Button onClick={this.handleSubmit}>Submit</Button> */}
            </Container>
            {(state.activeStep === 0) &&
                <Education
                    handleChange={this.handleChange}
                />}
            {(state.activeStep === 1) && <Skills handleChange={this.handleChange} />}
            {/*(state.activeStep === 2) && <Experience />}
            {(state.activeStep === 3) && <Projects />}
            {(state.activeStep === 4) && <Extracurriculars />} */}
            {(state.activeStep === 5) &&
                <Container>
                    <PDFViewer className="pdf-viewer">
                        <GeneratedResume
                            educationChanges={state.educationChanges}
                            skillChanges={state.skillChanges}
                        />
                    </PDFViewer>
                </Container>
            }
        </React.Fragment>
    }
}
export default Parent;