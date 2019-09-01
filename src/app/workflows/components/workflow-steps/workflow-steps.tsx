// import * as classNames from 'classnames';
import * as classNames from 'classnames';
import * as React from 'react';

import * as models from '../../../../models';
import {Utils} from '../../../shared/components';

require('./workflow-steps.scss');

export interface WorkflowStepsProps { workflow: models.Workflow; }

export const WorkflowSteps = (props: WorkflowStepsProps) => {
    // const entryPointTemplate = props.workflow.spec.templates.find((template) => template.name === props.workflow.spec.entrypoint) || { steps: [] as models.WorkflowStep[][] };
    // const phase = props.workflow.status.phase;
    // let isSucceeded = false;
    // let isFailed = false;
    // let isRunning = false;
    // if (phase === models.NODE_PHASE.RUNNING) {
    //     isRunning = true;
    // } else {
    //     isSucceeded = phase === models.NODE_PHASE.SUCCEEDED;
    //     isFailed = !isSucceeded;
    // }
    // const steps = (entryPointTemplate.steps || []).map((group) => group[0]).map((step) => ({ name: step.name, isSucceeded, isFailed, isRunning })).slice(0, 3);
    const shortName = props.workflow.metadata.name.replace(/gateway-(.*)-\w+$/g, '$1')

    return (
    <div className='workflow-steps'>
        <div className='workflow-steps__title'>
            <div className='workflow-steps__icon'>
                <i className='ax-icon-job' aria-hidden='true'/>
            </div>
            <div className='workflow-list-item__status-icon'>
                <i className={classNames('fa', Utils.statusIconClasses(props.workflow.status.phase))}  aria-hidden='true'/>
            </div>
            <div className='workflow-steps__description'>
                <div className='workflow-steps__description-title'>{shortName}</div>
            </div>
        </div>
    </div>
    );
};
