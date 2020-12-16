import { CHANGE_THEME } from "../constants/admin-panel";

const initialState = {
	theme: "autumn",
};

export const changeTheme = (state = initialState, action: any = {}) => {
	switch (action.type) {
		case CHANGE_THEME: {
			return {
				theme: action.payload,
			};
		}

		default:
			return state;
	}
};
