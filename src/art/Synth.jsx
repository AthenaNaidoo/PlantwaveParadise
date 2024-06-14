// src/Synth.js
import React, { useState, useEffect } from 'react';
import * as Tone from 'tone';

const Synth = () => {
    const [synth, setSynth] = useState(null);
    const [notes, setNotes] = useState([
        { note: 'C4', active: false },
        { note: 'D4', active: false },
        { note: 'E4', active: false },
        { note: 'F4', active: false },
        { note: 'G4', active: false },
        { note: 'A4', active: false },
        { note: 'B4', active: false },
        { note: 'C5', active: false },
    ]);

    useEffect(() => {
        const synth = new Tone.Synth().toDestination();
        setSynth(synth);
        return () => synth.dispose();
    }, []);

    const handleKeyDown = (note) => {
        if (synth) {
            synth.triggerAttack(note);
            setNotes(notes.map(n => n.note === note ? { ...n, active: true } : n));
        }
    };

    const handleKeyUp = (note) => {
        if (synth) {
            synth.triggerRelease();
            setNotes(notes.map(n => n.note === note ? { ...n, active: false } : n));
        }
    };

    return (
        <div className="synth">
            {notes.map((n, index) => (
                <button
                    key={index}
                    onMouseDown={() => handleKeyDown(n.note)}
                    onMouseUp={() => handleKeyUp(n.note)}
                    className={n.active ? 'active' : ''}
                >
                    {n.note}
                </button>
            ))}
        </div>
    );
};

export default Synth;