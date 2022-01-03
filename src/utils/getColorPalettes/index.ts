import { PaletteObj, StatePalettes } from 'src/colorPicker/types'
import transformPalette from '../transformPalette'
import { defaultPalettes } from "../../constants"

const getColorPalettes = (
	defaultPalette: string,
	disableDefaultPalettes?: boolean,
	customPalettes?: PaletteObj[]
) => {
	const transformedPalettes: StatePalettes = {
		default: defaultPalette,
		palettes: [],
	}

	customPalettes?.forEach(p => {
		const transformed = transformPalette(p)

		if (transformed) {
			transformedPalettes.palettes.push(transformed)
		}
	})

	if (!disableDefaultPalettes) {
		transformedPalettes.palettes.push(...defaultPalettes)
	}

  return transformedPalettes
}

export default getColorPalettes
