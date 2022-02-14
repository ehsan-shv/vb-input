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

describe('button', () => {
  it('should has no button if hasButton is false', () => {
    const wrapper = mount(VueBaseInput, {
      props: { type: 'text' },
    });
    expect(wrapper.find('button').exists()).toBe(false);
  });

  it('should has button if hasButton is true', () => {
    const wrapper = mount(VueBaseInput, {
      props: { hasButton: true, type: 'text' },
    });
    expect(wrapper.find('button').exists()).toBe(true);
  });

  it('should has button and buttonText if hasButton is true and type is not password or search', () => {
    const wrapper = mount(VueBaseInput, {
      props: { hasButton: true, buttonText: 'Send', type: 'text' },
    });
    expect(wrapper.find('button span').text()).toBe('Send');
  });

  it('should has button and passwordIcon if hasButton is true and type is password', () => {
    const wrapper = mount(VueBaseInput, {
      props: { hasButton: true, type: 'password' },
    });
    expect(wrapper.find('button span').classes('password')).toBe(true);
  });

  it('should has button and passwordIcon if hasButton is true and type is search', () => {
    const wrapper = mount(VueBaseInput, {
      props: { hasButton: true, type: 'search' },
    });
    expect(wrapper.find('button span').classes('search')).toBe(true);
  });
});

describe('direction', () => {
  it('by default is ltr', () => {
    const wrapper = mount(VueBaseInput);
    expect(wrapper.classes()).not.toContain('rtl');
  });

  it('is rtl if rtl prop is tre', () => {
    const wrapper = mount(VueBaseInput, {
      props: {
        rtl: true,
      },
    });
    expect(wrapper.classes()).toContain('rtl');
  });
});
