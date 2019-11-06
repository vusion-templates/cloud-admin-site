# 测试

## 单元测试

项目通过使用 [@vue/cli-plugin-unit-jest](https://www.npmjs.com/package/@vue/cli-plugin-unit-jest)、[jest](https://jestjs.io/)、[@vue/test-utils](https://vue-test-utils.vuejs.org/) 来帮助我们完成单元测试。

## 命令

```shell
npm run test:unit
```

## 使用

具体可查看 `tests/unit/global/filters/dates.spec.js` 文件，这里主要使用 [jest](https://jestjs.io/)。

```javascript
import Dates from '@/global/filters/dates';

describe('global/filters/dates', () => {
    test('dateFormat', () => {
        expect(Dates.dateFormat(new Date('2019-09-09 11:00:00'))).toBe('2019-09-09 11:00:00');
        expect(Dates.dateFormat(new Date('2019-09-09 11:00:00'), 'yyyy-MM-dd')).toBe('2019-09-09');
        expect(Dates.dateFormat(new Date('2019-09-09 11:00:00'), 'yyyy-MM-dd HH:mm')).toBe('2019-09-09 11:00');
        expect(Dates.dateFormat(new Date('2019-09-09 11:00:00'), 'yyyy-MM-dd HH:mm:ss')).toBe('2019-09-09 11:00:00');
        expect(Dates.dateFormat(new Date('2019-09-09 11:00:00'), 'yyyy-MM')).toBe('2019-09');
        expect(Dates.dateFormat(new Date('2019-09-09 11:00:00'), 'yyyy-M')).toBe('2019-9');

        expect(Dates.dateFormat()).toBe('-');
    });
    test('timeFormat', () => {
        expect(Dates.timeFormat(new Date('2019-09-09 11:00:00'))).toBe('2019-09-09');
        let now = new Date();
        expect(Dates.timeFormat(now)).toBe(Dates.dateFormat(now, '今天 HH:mm'));
        now.setDate(now.getDate() - 1);
        expect(Dates.timeFormat(now)).toBe(Dates.dateFormat(now, '昨天'));
        now.setDate(now.getDate() - 1);
        expect(Dates.timeFormat(now)).toBe(Dates.dateFormat(now, '前天'));

        now = new Date();
        expect(Dates.timeFormat(now, 'minute')).toBe(Dates.dateFormat(now, '今天 HH:mm'));
        now.setDate(now.getDate() - 1);
        expect(Dates.timeFormat(now, 'minute')).toBe(Dates.dateFormat(now, '昨天 HH:mm'));
        now.setDate(now.getDate() - 1);
        expect(Dates.timeFormat(now, 'minute')).toBe(Dates.dateFormat(now, '前天 HH:mm'));

        expect(Dates.timeFormat()).toBe('-');
    });
});
```

## 组件测试

具体可查看 `tests/unit/src/global/components/common/u-search.spec.js` 文件，这里主要使用 [@vue/test-utils](https://vue-test-utils.vuejs.org)

```javascript
import { mount } from '@vue/test-utils';
import '@/views/dashboard/components';
import USearch from '@/global/components/common/u-search.vue';

describe('global/components/common/u-search', () => {
    const wrapper = mount(USearch, {
        propsData: {
            value: 'test',
        },
    });
    it('renders a input', () => {
        expect(wrapper.contains('input')).toBe(true);
    });
    it('set value', () => {
        expect(wrapper.props().value).toBe('test');
    });
    it('reset value', () => {
        wrapper.vm.$on('input', (value) => {
            expect(value).toBe('test1');
        });
        wrapper.setProps({
            value: 'test1',
        });
    });
    const wrapper2 = mount(USearch, {
        propsData: {
            value: 'test',
        },
    });
    it('type input trigger blur', () => {
        wrapper2.vm.$once('input', (value) => {
            expect(value).toBe('test2');
        });
        wrapper2.find('input').setValue('test2');
        expect(wrapper2.props().value).toBe('test');
        wrapper2.find('input').trigger('blur');
    });
    const wrapper3 = mount(USearch, {
        propsData: {
            value: 'test2',
        },
    });
    it('type input trigger keyup.enter', () => {
        wrapper3.vm.$once('input', (value) => {
            expect(value).toBe('test3');
        });
        wrapper3.find('input').setValue('test3');
        expect(wrapper3.props().value).toBe('test2');
        wrapper3.find('input').trigger('keyup.enter');
    });
});
```

:::tip
项目未提供 `e2e` 测试方案，如有需求，可以查看 [@vue/cli-plugin-e2e-nightwatch](https://www.npmjs.com/package/@vue/cli-plugin-e2e-nightwatch) 或 [@vue/cli-plugin-e2e-cypress](https://www.npmjs.com/package/@vue/cli-plugin-e2e-cypress)
:::
