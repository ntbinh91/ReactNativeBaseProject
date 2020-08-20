import { init } from "@rematch/core";
import createRematchPersist from "@rematch/persist";
import AsyncStorage from "@react-native-community/async-storage";
import models from "./models";

const persistPlugin = createRematchPersist({
  key: "root",
  storage: AsyncStorage,
  version: 2,
  whitelist: ["count"],
});

const store = init({
  models,
  plugins: [persistPlugin],
});

export default store;
