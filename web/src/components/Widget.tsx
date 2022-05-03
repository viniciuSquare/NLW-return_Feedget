import { useState } from 'react';

import { ChatTeardropDots } from 'phosphor-react';

import { Popover } from '@headlessui/react'

export function Widget() {

  const [ isWidgetOpen, setIsWidgetOpen ] = useState(false);

  function toggleWidgetVisibility() {
    setIsWidgetOpen(!isWidgetOpen);
  }

  return (
    <Popover className="absolute bottom-5 right-5">

      <Popover.Panel>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsum facilis fugit nobis repellendus porro dolorum, rem doloribus placeat quaerat hic quibusdam, dolores quia. Itaque nostrum quaerat voluptates deserunt mollitia!
      </Popover.Panel>

      <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white group flex items-center">
        <ChatTeardropDots className="w-6 h-6"/>

        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span pl-2></span>
           Feedback
          </span>
      </Popover.Button>
    </Popover>

  ) 
}