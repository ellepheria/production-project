import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';
import type {
    StateSchema, ReduxStoreWithManager, ThunkExtraArg, ThunkConfig,
} from './config/StateSchema';

export {
    StoreProvider,
    createReduxStore,
    ReduxStoreWithManager,
    StateSchema,
    ThunkExtraArg,
    AppDispatch,
    ThunkConfig,
};
