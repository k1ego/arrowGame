import { useAppSelector } from "../../../../app/hooks"
import { MAP_ARROW_CODES } from "../../constants";
import { IMapArrowCodes } from "../../types";

export const useKeyPressedElement = (): string => {
	const state = useAppSelector((state) => state.playground)

	if (state.steps.length) {
		// получаем последний элемент
		const entereadValue = state.steps[state.currentStep - 1].entereadValue;
		console.log(entereadValue)

		if (entereadValue) {
			return MAP_ARROW_CODES[entereadValue as keyof IMapArrowCodes]
		}
	}
	return "⌛️"
}