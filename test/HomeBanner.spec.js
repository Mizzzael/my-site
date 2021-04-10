import { mount } from '@vue/test-utils'
import HomeBanner from '@/components/HomeBanner.vue'

describe('HomeBanner', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(HomeBanner)
        expect(wrapper.vm).toBeTruthy()
    })
})
