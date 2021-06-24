import React from "react";
import { useParameter } from '@storybook/api';
import { css, jsx } from '@emotion/react';
import { transformPalette } from "src/utils";
import Colors from './Colors';
/** @jsx jsx */

export type ShadeType = {
    label: string,
    value: string,
}

export type ColorPaletteAsArray = {
    label: string,
    values: ShadeType[]
}

export type ShadesType = Record<string, string> | string;
export type ColorsPalette = Record<string, ShadesType> | ColorPaletteAsArray[];

const ColorPicker = () => {
    const colorPalette: ColorsPalette = useParameter('colorPalette');

    const getColors = () => {
        const transformedPalette = transformPalette(colorPalette);
        return transformedPalette.map(colors => (
            <Colors
                colors={colors}
                key={`Shades_${colors.label}`}
            />
        ))
    };

    return (
        <div
            css={css`
                background: #fff;
                border-radius: 10px;
                max-height: 50vh;
                max-width: 40vw;
                padding: 0 1em 1em 1em;
                overflow-x: hidden;
                overflow-y: auto;
                &::-webkit-scrollbar {
                    width: 8px;
                    height: 8px;
                }
                &::-webkit-scrollbar-track {
                    background: transparent;
                }
                &::-webkit-scrollbar-thumb {
                    background: #ccc;
                    border-radius: 4px;
                    &:hover {
                        background-color: #666;
                    }
                }
            `}
        >
            <div
                css={css`
                    font-size: 1.2em;
                    margin: 1em;
                    text-align: center;
                `}
            >
                Click on color to copy to clipboard
            </div>
            <div>
                {getColors()}
            </div>
        </div>
    );
};

export default ColorPicker;