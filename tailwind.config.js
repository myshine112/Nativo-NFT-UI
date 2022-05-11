module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        's': '4px 1px 17px rgba(253, 252, 252, 0.05)',
        'brown-s': '0 0 20px rgba(158, 009, 004, 1)',
        'yellow1' : '0 0 20px rgb(209, 131, 40)'
      },
      colors: {
        'white': '#fff',
        'darkgray': '#1d1d1b',
        'yellow': '#f8de44',
        'yellow2': '#eb8a06',
        'brown': '#9e0904',
        'brown2': '#d15904',
        'yellow3': '#f6bc25',
        'pink': '#fd644f',
        'pink-2' : "#fb5988",
        'melon': '#f28e26',
        'hotpink': '#ff0f47',
        'lightpink': '#ffab96',
        'blue': '#3c65aa',
        'purple': '#c6379c',
        "yellow4": '#f5bc25',
        "orange": "#f9650b",
        "yellow5" : "#f6c930"
      },
      borderRadius: {
        'xlarge': '15px',
        '20': '20px',
      },
      backgroundImage: {
        'hero-rocket': "url('./assets/img/Rocket.png')",
        'trendings-background': "url('./assets/img/Trending2.png')"
      },
      backgroundSize: {
        '40': '40%'
      },
      fontFamily: {
        'raleway': ['raleway', 'sans-serif'], 
        'open-sans': ['Open Sans', 'sans-serif']
      }
    }
  },
  plugins: [],
}
