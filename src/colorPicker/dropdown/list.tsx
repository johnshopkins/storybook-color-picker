import React, { ElementType } from "react";
import { css, jsx } from '@emotion/react';
// Components
import AnimateHeight from 'react-animate-height';
/** @jsx jsx */

export type ListPosition = 'bottom-left' | 'bottom-right'

type Props<I> = {
    active: boolean,
    items: I[],
    itemProps: Record<string, unknown>
    itemComponent: ElementType<I>;
    onItemClick: (item: I, index: number) => void,
};

const List = (props: Props<any>) => {
    const ItemComponent = props.itemComponent;

    const getListItems = () => props.items.map((item, i) => {
        const onItemClick = () => {
            props.onItemClick(item, i);
        };

        return (
            <div
                key={i}
                onClick={onItemClick}
                css={css`
                    background-color: #fff;
                    padding: 0;
                    border: none;
                    width: 100%;
                    display: block;
                `}
            >
                <ItemComponent
                    item={item}
                    itemProps={props.itemProps}
                    index={i}
                    key={i}
                />
            </div>
        )
    });

    return (
        <div
            css={css`
                position: fixed;
            `}
        >
            <AnimateHeight height={props.active ? 'auto' : 0}>
                <div
                    css={css`
                        box-shadow: 0px 0px 4px 1px #eee;
                        background: #fff;
                        border-radius: .5em;
                        margin: .25em;
                        max-height: 200px;
                        overflow-x: hidden;
                        overflow-y: auto;
                        &::-webkit-scrollbar {
                            width: .5em;
                            height: .5em;
                        }
                        &::-webkit-scrollbar-track {
                            background: transparent;
                        }
                        &::-webkit-scrollbar-thumb {
                            background: #ccc;
                            border-radius: .25em;
                            &:hover {
                                background-color: #666;
                            }
                        }
                    `}
                >
                    {getListItems()}
                </div>
            </AnimateHeight>
        </div>
    );
};

export default List;
