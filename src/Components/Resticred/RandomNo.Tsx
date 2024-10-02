import React from 'react';

type RandomNoType = {
    value: number;
};

type PositiveNo = RandomNoType & {
    isPositive: boolean;
    isNegative?: never;
    isZero?: never;
};

type NegativeNo = RandomNoType & {
    isPositive?: never;
    isNegative: boolean;
    isZero?: never;
};

type ZeroNo = RandomNoType & {
    isPositive?: never;
    isNegative?: never;
    isZero: boolean;
};

type RandomNoProps = PositiveNo | NegativeNo | ZeroNo

export const RandomNo = ({
    value,
    isPositive,
    isNegative,
    isZero,
}: RandomNoProps) => {
    return (
        <div>
            {value} {isPositive && 'Positive'} {isNegative && 'Negative'} {isZero && 'Zero'}
        </div>
    );
};