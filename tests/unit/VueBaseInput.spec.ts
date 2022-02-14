import { mount } from '@vue/test-utils';
import VueBaseInput from '@/components/VueBaseInput.vue';

describe('type prop', () => {
  it('input type attr should be text', () => {
    const wrapper = mount(VueBaseInput, {
      props: { type: 'text' },
    });
    const input = wrapper.find('input');
    expect(input.element.type).toBe('text');
  });

  it('input type attr should be number', () => {
    const wrapper = mount(VueBaseInput, {
      props: { type: 'number' },
    });
    const input = wrapper.find('input');
    expect(input.element.type).toBe('number');
  });

  it('input type attr should be password', () => {
    const wrapper = mount(VueBaseInput, {
      props: { type: 'password' },
    });
    const input = wrapper.find('input');
    expect(input.element.type).toBe('password');
  });

  it('input type attr should be email', () => {
    const wrapper = mount(VueBaseInput, {
      props: { type: 'email' },
    });
    const input = wrapper.find('input');
    expect(input.element.type).toBe('email');
  });

  it('input type attr should be search', () => {
    const wrapper = mount(VueBaseInput, {
      props: { type: 'search' },
    });
    const input = wrapper.find('input');
    expect(input.element.type).toBe('search');
  });

  it('textarea should render if there is no type prop', () => {
    const wrapper = mount(VueBaseInput);
    expect(wrapper.find('textarea').exists()).toBe(true);
  });
});
