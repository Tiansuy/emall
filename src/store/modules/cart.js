import { set } from '@/utils/vuex'

export default {
    namespaced: true,
  
    state: {
      games: [
        {
          id: 1,
          name: 'Elder Earth',
          src: 'elder-earth',
          price: 19.99,
          compareAt: 27.99,
          publisher: 'Creten Studios',
          updated: 1545864353040,
        },
      ],
    },
    
    mutations:{
        setGames:set("games"),
    },
    getters: {
      featured: (state, getters) => {
        return getters.parsedGames.sort((a, b) => {
          if (a.updated < b.updated) return -1
          if (a.updated > b.updated) return 1
          return 0  
        }).slice(0, 3)
      },
      parsedGamesCart: state => {
        return state.games.map(game => ({
          ...game,
          bg: `games/${game.src}/bg.png`,
          bg2: `games/${game.src}/bg2.png`,
          logo: `games/${game.src}/logo.png`,
          avatar: `games/${game.src}/avatar.png`,
        }))
      },
    },
  }
  