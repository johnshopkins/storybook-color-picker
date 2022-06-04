import React, { useCallback } from 'react'
import { StatePalette } from '../types'
import Dropdown from '../dropdown/dropdown'
import Palette from './palette'

type Props = {
  palettes: StatePalette[]
  current: number
  onChange: (newCurrent: number) => void
}

const PalettesList = (props: Props) => {
  const handleChange = useCallback(
    (item: StatePalette, index: number) => {
      props.onChange(index)
    },
    [props.onChange]
  )

  const label =
    props.palettes.length > 1
      ? props.palettes[props.current].name
      : props.palettes[0].name

  const itemProps = {
    current: props.current,
  }

  return (
    <Dropdown
      label={label || `Palette No${props.current + 1}`}
      items={props.palettes}
      itemProps={itemProps}
      itemComponent={Palette}
      closeOnItemClick={true}
      renderList=">1"
      onItemClick={handleChange}
    />
  )
}

export default PalettesList
