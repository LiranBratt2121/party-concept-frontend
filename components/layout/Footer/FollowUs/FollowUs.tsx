import React from 'react'
import { FollowUsWrapper, FacebookEmbed } from './FollowUs.styles'

const FollowUs = () => {
  return (
    <FollowUsWrapper>
      <FacebookEmbed
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpartyconcept.co.il&tabs=timeline&width=280&height=400&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowTransparency={true}
        title="Facebook Page"
        height={200}
      />
    </FollowUsWrapper>
  )
}

export default FollowUs