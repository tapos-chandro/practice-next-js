
'use client';

const Button = () => {
    return (
        <div>
            <button onClick={() => alert('Button clicked!')} className="btn btn-primary">Click Me</button>
        </div>
    );
};

export default Button;