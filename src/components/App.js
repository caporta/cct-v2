import React, { Component } from 'react';

import StartContainer from '../containers/StartContainer';
import SideContainer from '../containers/SideContainer';
import ThemeSelect from './ThemeSelect';
import BoardContainer from '../containers/BoardContainer';
import ScoreContainer from '../containers/ScoreContainer';
import CoordinateContainer from '../containers/CoordinateContainer';
import ProgressContainer from '../containers/ProgressContainer';


class App extends Component {
    coordinates() {
        return [
            'a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8',
            'a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7',
            'a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6',
            'a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5',
            'a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4',
            'a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3',
            'a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2',
            'a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1',
        ];
    }

    sides() {
        return ['white', 'black'];
    }

    themes() {
        return ['modern'];
    }

    render() {
        return (
            <div className={'game'}>
                <div className={'table'}>
                    <div className={'panel panel__left'}>

                        <div className={'box box__start'}>
                            <StartContainer coordinates={this.coordinates.bind(this)} />
                        </div>

                        <div className={'box box__side'}>
                            Choose Side:
                            <SideContainer sides={this.sides.bind(this)} />
                        </div>

                        <div className={'box box__theme'}>
                            Choose Theme:
                            <ThemeSelect themes={this.themes.bind(this)} />
                        </div>

                    </div>

                    <BoardContainer coordinates={this.coordinates.bind(this)} />

                    <div className={'panel panel__right'}>

                        <div className={'box box__coordinate'}>
                            Coordinate:
                            <CoordinateContainer />
                        </div>

                        <div className={'box box__score'}>
                            Final Score:
                            <ScoreContainer />
                        </div>

                    </div>

                </div>

                <ProgressContainer />

            </div>
        );
    }
}

export default App;
