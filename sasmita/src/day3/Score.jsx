import React from 'react'
import { useState } from 'react'

const [isClicked,checkClick] = useState(isClicked)
const Score = () => {
  return (
    <div>
        <label>
            <input type="checkbox" />
        </label>
    </div>
  )
}

export {Score}