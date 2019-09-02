import * as moment from 'moment';
import * as React from 'react';

import * as models from '../../../../models';
import {Duration} from '../../../shared/components';

import {WorkflowSteps} from '../workflow-steps/workflow-steps';

require('./workflow-list-item.scss');

export interface WorkflowListItemProps { workflow: models.Workflow; }

export const WorkflowListItem = (props: WorkflowListItemProps) => {

    const endTime = props.workflow.status.finishedAt ? moment(props.workflow.status.finishedAt) : moment();
    const duration = endTime.diff(moment(props.workflow.status.startedAt)) / 1000;

    return (
        <div className='workflow-list-item'>
            <div className='workflow-list-item__content'>
                <div className='row collapse'>
                    <div className='columns medium-7'>
                        <div className='workflow-list-item__content-box'>
                            <WorkflowSteps workflow={props.workflow}/>
                        </div>
                    </div>
                    <div className='columns small-5'>
                        <div className='workflow-list-item__content-details'>
                            <div className='workflow-list-item__content-details-row row'>
                                <div className='columns small-4'>FULLNAME:</div>
                                <div className='columns small-8'>{props.workflow.metadata.name} ({props.workflow.metadata.namespace})</div>
                            </div>
                            <div className='workflow-list-item__content-details-row row'>
                                <div className='columns small-4'>CREATED AT:</div>
                                <div className='columns small-8'>{props.workflow.metadata.creationTimestamp}</div>
                            </div>
                            <div className='workflow-list-item__content-details-row row'>
                                <div className='columns small-4'>FINISHED AT:</div>
                                <div className='columns small-8'>{props.workflow.status.finishedAt}</div>
                            </div>
                            <div className='workflow-list-item__content-details-row row'>
                                <div className='columns small-4'>DURATION:</div>
                                <div className='columns small-8'><Duration durationMs={duration}/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
