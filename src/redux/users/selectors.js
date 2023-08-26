export const selectToken = state => state.token;

export const selectAvatar = state => state.token.avatarURL;

export const selectNameUser = state => state.token.name;

export const selectLoadingSkeleton = state => state.token.isLoading;
