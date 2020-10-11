import { useEffect } from 'react';

const defaultOPtion = {
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'
};

const useScrollIntoViewHook = (ClassName, id, dependencies, option = defaultOPtion) => {
  useEffect(() => {
    let element = {};

    if (id) {
        element = document.getElementById(id);
    } else {
        element = document.getElementsByClassName(ClassName)[0];
    }

    element.scrollIntoView(option);
  }, dependencies);
};

export default useScrollIntoViewHook;
