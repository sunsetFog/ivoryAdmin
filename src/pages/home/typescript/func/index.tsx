import React from 'react';

interface Props {
    children?: React.ReactNode;
    [random: string]: any;
}
const Func: React.FC<Props> = (props) => {
    console.log('--Func--', props);
    return <div>666</div>;
};

export default Func;
