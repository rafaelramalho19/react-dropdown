import React from 'react'
import {Dropdown, DropdownMenu} from '../src'

function AddFileDropdown ({ label, background, boxShadow, open, onActivate, onDismiss, alignRight, translateX, translateY }) {
  return (
    <Dropdown className='mh3'>
      <button onClick={onActivate} className='br2 bg-blue white pa3 avenir fw5' style={{width: 200}}>
        {label}
      </button>
      <DropdownMenu open={open} onDismiss={onDismiss} width={200} alignRight={alignRight} background={background} boxShadow={boxShadow} translateX={translateX} translateY={translateY}>
        <nav className='pv1'>
          <Option href='#'>Add File</Option>
          <Option href='#'>Add Folder</Option>
          <Option href='#'>Add Path</Option>
        </nav>
      </DropdownMenu>
    </Dropdown>
  )
}

class ExamplePage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      open: false
    }

    this.toggleDropdown = this.toggleDropdown.bind(this)
  }

  toggleDropdown () {
    this.setState(s => ({open: !s.open}))
  }

  render () {
    const {open} = this.state
    return (
      <div className='flex items-center justify-center'>
        <AddFileDropdown label='alignRight' open={open} onActivate={this.toggleDropdown} onDismiss={this.toggleDropdown} alignRight />
        <AddFileDropdown label='default' open={open} onActivate={this.toggleDropdown} onDismiss={this.toggleDropdown} />
        <AddFileDropdown label='aqua background' background='#69c4cd' open={open} onActivate={this.toggleDropdown} onDismiss={this.toggleDropdown} />
        <AddFileDropdown label='pink shadow' boxShadow='0px 1px 10px 0px pink' open={open} onActivate={this.toggleDropdown} onDismiss={this.toggleDropdown} />
        <AddFileDropdown label='with transforms' translateX={90} translateY={10} open={open} onActivate={this.toggleDropdown} onDismiss={this.toggleDropdown} />
      </div>
    )
  }
}

function Option ({children, href}) {
  return (
    <a href={href} className='db pv2 ph3 link bg-animate hover-bg-washed-blue dark-gray'>
      {children}
    </a>
  )
}

export default ExamplePage
