/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {

    extend: {
      colors: {
        background: "hsl(var(--background))",
        'background-primary': {
          DEFAULT: "hsl(var(--background-primary))",
          hover: "hsl(var(--background-primary-hover))",
        },
        'background-secondary': {
          DEFAULT: "hsl(var(--background-secondary))",
          hover: "hsl(var(--background-secondary-hover))",
        },
        'background-muted': {
          DEFAULT: "hsl(var(--background-muted))",
          hover: "hsl(var(--background-muted-hover))",
        },
        'border': {
          DEFAULT: "hsl(var(--border))",
          hover: "hsl(var(--border-hover))",
        },
        'text': {
          DEFAULT: "hsl(var(--text))",
          muted: "hsl(var(--text-muted))",
          inverse: "hsl(var(--text-inverse))",
        },
        'icon': {
          DEFAULT: "hsl(var(--icon))",
          inverse: "hsl(var(--icon-inverse))",
        },
      },
      spacing: {
        page: '4px',
        0: '0px',
        0.5: '2px',
        1: '4px',
        1.5: '6px',
        2: '8px',
        2.5: '10px',
        3: '12px',
        3.5: '14px',
        4: '16px',
        4.5: '18px',
        5: '20px',
        5.5: '22px',
        6: '24px',
        6.5: '26px',
        7: '28px',
        7.5: '30px',
        8: '32px',
        8.5: '34px',
        9: '36px',
        9.5: '38px',
        10: '40px',
        10.5: '42px',
        11: '44px',
        11.5: '46px',
        12: '48px',
        12.5: '50px',
        13: '52px',
        13.5: '54px',
        14: '56px',
        14.5: '58px',
        15: '60px',
        15.5: '62px',
        16: '64px',
        16.5: '66px',
        17: '68px',
        17.5: '70px',
        18: '72px',
        18.5: '74px',
        19: '76px',
        19.5: '78px',
        20: '80px',
        20.5: '82px',
        21: '84px',
        21.5: '86px',
        22: '88px',
        22.5: '90px',
        23: '92px',
        23.5: '94px',
        24: '96px',
        24.5: '98px',
        25: '100px',
      }
    },
    fontFamily: {
      satoshi: '"Satoshi"',
      chillax: '"Chillax"',
      gambetta: '"Gambetta"'
    },
    screens: {
      'tablet': '810px',
      'desktop': '1280px'
    },

  },
  plugins: [],
}

