import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import App from '@/App.vue'

describe('App.vue', () => {
	it('renders the correct content', () => {
		const wrapper = mount(App)
		expect(wrapper.html()).toContain('<div>Hello World</div>')
	})
})
