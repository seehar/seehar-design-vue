import { SeeharUIConfiguration } from '../types/variant'

const fullTheme: SeeharUIConfiguration = {
  ShButton: {
    base: {
      root: 'py-2 px-5 shadow-sm border max-w-full outline-none relative inline-flex justify-center items-center active:shadow-none font-medium text-sm leading-none cursor-pointer rounded select-none transition-all duration-200 outline-0 font-sans focus-visible:shadow-[0_1px_1px_0,0_0_0_3px]',
      outlined:
        '!shadow-sm focus-visible:!shadow-[0_1px_1px_0,0_0_0_3px] active:!shadow-none !bg-transparent active:bg-transparent',
      text: 'empty:!hidden flex text-center flex-row space-x-2 items-center',
      round: 'rounded-3xl after:rounded-3xl',
      small: '!px-3.5 !py-1',
      large: '!px-7 !py-3.5 text-base rounded-md',
      empty: '!p-2',
      loading: 'absolute !w-6 !h-6',
      disabled: ''
    },
    variants: {
      default: {
        root: [
          'text-slate-900 shadow-slate-600/10 border-slate-200 bg-white focus-visible:border-slate-400 focus-visible:shadow-slate-200/60 active:bg-gray-100',
          'dark:bg-zinc-700 dark:shadow-zinc-600/10 dark:text-white dark:border-zinc-600 dark:active:bg-zinc-800 dark:focus-visible:border-zinc-500 dark:focus-visible:shadow-zinc-200/60'
        ]
      },
      primary: {
        root: [
          'bg-blue-600 shadow-md shadow-blue-600/40 border-blue-600 text-white',
          'active:bg-blue-700 active:!border-blue-700 focus-visible:border-blue-600 hover:bg-blue-500 hover:!border-blue-500'
        ],
        outlined:
          '!text-blue-600 hover:bg-blue-400/10 active:bg-blue-400/20 focus-visible:shadow-blue-600/40',
        loading: '!border-r-white',
        disabled:
          '!bg-blue-700 !border-blue-700 active:!bg-blue-700 active:!border-blue-700 hover:!border-blue-700 hover:!bg-blue-700'
      },
      'primary-text': {
        root: [
          '!bg-transparent !shadow-blue-600/40 text-blue-600 !border-none',
          'active:!bg-blue-400/20 focus-visible:border-none hover:!border-none',
          "after:content-[''] after:rounded after:absolute after:inset-0 after:bg-blue-400/10 after:scale-50 after:opacity-0 hover:after:scale-100 hover:after:opacity-100 after:transition-all after:ease-in-out after:duration-200"
        ]
      },
      text: {
        root: [
          '!bg-transparent !border-none',
          'focus-visible:shadow-slate-200/60 active:bg-gray-100 active:!bg-gray-400/20 focus-visible:border-none hover:!border-none',
          "after:content-[''] after:rounded after:absolute after:inset-0 after:bg-gray-400/10 after:scale-50 after:opacity-0 hover:after:scale-100 hover:after:opacity-100 after:transition-all after:ease-in-out after:duration-200"
        ]
      },
      success: {
        root: [
          'bg-green-500 shadow-md !shadow-green-500/40 !border-green-500 text-white',
          'active:bg-green-600 active:!border-green-600 focus-visible:border-green-500 hover:bg-green-400 hover:!border-green-400'
        ],
        outlined:
          '!text-green-500 hover:bg-green-400/10 active:bg-green-400/20 focus-visible:!shadow-green-500/40',
        loading: '!border-r-white',
        disabled:
          '!bg-green-700 !border-green-700 active:!bg-green-700 active:!border-green-700 hover:!border-green-700 hover:!bg-green-700'
      },
      'success-text': {
        root: [
          '!bg-transparent !shadow-green-500/40 !text-green-500 !border-none ',
          'active:!bg-green-400/20 focus-visible:border-none hover:!border-none',
          "after:content-[''] after:rounded after:absolute after:inset-0 after:bg-green-400/10 after:scale-50 after:opacity-0 hover:after:scale-100 hover:after:opacity-100 after:transition-all after:ease-in-out after:duration-200"
        ]
      },
      warning: {
        root: [
          'bg-yellow-500 shadow-md text-white !shadow-yellow-500/40 !border-yellow-500',
          'active:bg-yellow-600 active:!border-yellow-600 focus-visible:border-yellow-500 hover:bg-yellow-400 hover:!border-yellow-400'
        ],
        outlined:
          '!text-yellow-500 hover:bg-yellow-400/10 active:bg-yellow-400/20 focus-visible:!shadow-yellow-500/40',
        loading: '!border-r-white',
        disabled:
          '!bg-yellow-700 !border-yellow-700 active:!bg-yellow-700 active:!border-yellow-700 hover:!border-yellow-700 hover:!bg-yellow-700'
      },
      'warning-text': {
        root: [
          '!bg-transparent !shadow-yellow-500/40 !text-yellow-500 !border-none hover:!border-none',
          'active:!bg-yellow-400/20 focus-visible:border-none',
          "after:content-[''] after:rounded after:absolute after:inset-0 after:bg-yellow-400/10 after:scale-50 after:opacity-0 hover:after:scale-100 hover:after:opacity-100 after:transition-all after:ease-in-out after:duration-200"
        ]
      },
      danger: {
        root: [
          'bg-red-500 shadow-md !shadow-red-500/40 !border-red-500 text-white',
          'active:bg-red-600 active:!border-red-600 focus-visible:border-red-500 hover:bg-red-400 hover:!border-red-400'
        ],
        outlined:
          '!text-red-500 hover:bg-red-400/10 active:bg-red-400/20 focus-visible:!shadow-red-500/40',
        loading: '!border-r-white',
        disabled:
          '!bg-red-700 !border-red-700 active:!bg-red-700 active:!border-red-700 hover:!border-red-700 hover:!bg-red-700'
      },
      'danger-text': {
        root: [
          '!bg-transparent !shadow-red-500/40 !text-red-500 !border-none',
          'active:!bg-red-400/20 hover:!border-none focus-visible:border-none',
          "after:content-[''] after:rounded after:absolute after:inset-0 after:bg-red-400/10 after:scale-50 after:opacity-0 hover:after:scale-100 hover:after:opacity-100 after:transition-all after:ease-in-out after:duration-200"
        ]
      },
      info: {
        root: [
          'bg-gray-500 shadow-md !shadow-gray-500/40 !border-gray-500 text-white',
          'active:bg-gray-600 active:!border-gray-600 focus-visible:border-gray-500 hover:bg-gray-400 hover:!border-gray-400'
        ],
        outlined:
          '!text-gray-500 hover:bg-gray-400/10 active:bg-gray-400/20 focus-visible:!shadow-gray-500/40',
        loading: '!border-r-white',
        disabled:
          '!bg-gray-700 !border-gray-700 active:!bg-gray-700 active:!border-gray-700 hover:!border-gray-700 hover:!bg-gray-700'
      },
      'info-text': {
        root: [
          '!bg-transparent !shadow-gray-500/40 text-gray-500 dark:text-gray-300 !border-none',
          'active:!bg-gray-400/20 hover:!border-none focus-visible:border-none',
          "after:content-[''] after:rounded after:absolute after:inset-0 after:bg-gray-400/10 after:scale-50 after:opacity-0 hover:after:scale-100 hover:after:opacity-100 after:transition-all after:ease-in-out after:duration-200"
        ]
      },
      disabled: {
        root: ['!shadow-none !cursor-not-allowed !text-gray-300 border-zinc-700'],
        outlined: '!bg-red-100 hover:bg-red-100 active:!bg-red-100',
        loading: '!border-r-slate-300'
      }
    }
  },
  ShCard: {
    base: {
      root: 'bg-white shadow-sm rounded-md border border-gray-200 p-4 dark:bg-zinc-800 dark:border-zinc-700'
    },
    variants: {
      default: {
        root: ''
      },
      outlined: {
        root: ''
      }
    }
  },
  transitions: {}
}

export default fullTheme
