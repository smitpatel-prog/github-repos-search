import React from 'react';
import { shallow, mount } from 'enzyme';
import UserRepos from "./UserRepos";
import "../../testsetup"

it('should render without errors', () => {
    const wrapper = shallow(<UserRepos
        repos={{
            totalCount: 12,
            nodes: []
        }}
    />);
    expect(wrapper.exists()).toBe(true);
});



it('should show No User Found if repo desciption doesnt exist', () => {
    const wrapper = shallow(<UserRepos
        repos={{
            totalCount: 1,
            nodes: [{
                id: 1,
                name: 'TestRepo',
                description: null,
                url: null
            }]
        }}
    />);
    expect(wrapper.find('div.rep-desc').text()).toBe('No User Found');

    expect(wrapper.find('.repo-results').exists()).toBe(false);

});
