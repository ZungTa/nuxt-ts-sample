import { GetterTree, ActionTree, MutationTree, ActionContext } from 'vuex'
import { Context } from '@nuxt/types';

export const state = () => ({
  things: [] as string[],
  name: 'Me',
});

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {
  name: state => state.name
}

export const mutations: MutationTree<RootState> = {
  CHANGE_NAME(state, newName: string) {
    state.name = newName;
  }
}

interface Actions<S, R> extends ActionTree<S, R> {
  nuxtServerInit(actionContext: ActionContext<S, R>, appContext: Context): void
}

export const actions: Actions<RootState, RootState> = {
  nuxtServerInit({ commit }, { req }) { },
  async getPlaceHolder(context, payload) {
    console.log('context,payload? ', context, payload);
    const { data } = await this.$axios.get('https://jsonplaceholder.typicode.com/todos/2');
    // context.state.name = data.title;
    context.commit('CHANGE_NAME', data.title);
  },
}