
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
                valor: {
                    primary: '#1A365D',    // Deep navy blue
                    secondary: '#2A6BAA',  // Conservative blue
                    accent: '#4A7FB5',     // Professional blue
                    light: '#F7FAFC',      // Off-white
                    dark: '#2D3748',       // Dark gray
                    muted: '#A0AEC0',      // Medium gray
                }
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
                'fade-in': {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                'slide-in-left': {
                    '0%': { opacity: '0', transform: 'translateX(-10px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' }
                },
                'slide-in-right': {
                    '0%': { opacity: '0', transform: 'translateX(10px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' }
                },
                'scale-up': {
                    '0%': { opacity: '0', transform: 'scale(0.98)' },
                    '100%': { opacity: '1', transform: 'scale(1)' }
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-5px)' }
                }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in': 'fade-in 0.5s ease-out',
                'slide-in-left': 'slide-in-left 0.5s ease-out',
                'slide-in-right': 'slide-in-right 0.5s ease-out',
                'scale-up': 'scale-up 0.4s ease-out',
                'float': 'float 5s ease-in-out infinite'
			},
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Montserrat', 'sans-serif']
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-pattern': 'linear-gradient(to right, rgba(26, 54, 93, 0.9), rgba(26, 54, 93, 0.6)), url("/hero-bg.jpg")',
            },
            boxShadow: {
                'glass': '0 2px 10px rgba(0, 0, 0, 0.05)',
                'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                'button': '0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            },
            transitionDuration: {
                '2000': '2000ms',
            },
            backdropBlur: {
                'xs': '2px',
            }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
