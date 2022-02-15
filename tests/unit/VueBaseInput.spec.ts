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

  it('textarea should render ', () => {
    const wrapper = mount(VueBaseInput, {
      props: { type: 'textarea' },
    });
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
  it('is ltr by default', () => {
    const wrapper = mount(VueBaseInput, {
      type: 'text',
    });
    expect(wrapper.classes('input')).not.toContain('rtl');
  });

  it('is rtl if rtl prop is true', () => {
    const wrapper = mount(VueBaseInput, {
      type: 'text',
    });
    expect(wrapper.classes('input')).toContain('rtl');
  });
});

describe('show, hide password', () => {
  it('hide password by default and show after button click', async () => {
    const wrapper = mount(VueBaseInput, {
      props: {
        type: 'password',
        hasButton: true,
      },
    });
    const button = wrapper.find('button');
    const icon = wrapper.find('button span');

    expect(wrapper.vm.showPassword).toBe(false);

    await button.trigger('click');

    expect(wrapper.vm.showPassword).toBe(true);
    expect(icon.classes('showPassword')).toBe(true);
  });
});

describe('error message', () => {
  it('does not show any error by default', async () => {
    const wrapper = mount(VueBaseInput, {
      props: {
        type: 'text',
      },
    });
    const errorMessage = wrapper.find('.vb-input__errorMessage');

    expect(errorMessage.exists()).not.toBe(true);
  });

  it('show error prop value as error message', async () => {
    const wrapper = mount(VueBaseInput, {
      props: {
        type: 'text',
        error: 'Not Valid',
      },
    });
    const errorMessage = wrapper.find('.vb-input__errorMessage');

    expect(errorMessage.exists()).toBe(true);
    expect(errorMessage.text()).toBe('Not Valid');
  });
});

// describe('emmit', () => {
//   it('will emit when button clicks', async () => {
//     const wrapper = mount(VueBaseInput, {
//       props: {
//         type: 'text',
//         hasButton: true,
//         buttonText: 'Send',
//       },
//     });
//     const button = wrapper.find('button');

//     await button.trigger('click');
//     wrapper.vm.onButtonClick();
//   });
// });
