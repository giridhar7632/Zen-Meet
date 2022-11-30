import clsx from 'clsx'
import React from 'react'
import classes from './blob.module.css'

const Colors = () => {
  return (
    <div className={clsx(classes.blobC)}>
      <div className={clsx(classes.colorBlob)}></div>
      <div className={clsx(classes.colorBlob, classes.one)}></div>
      <div className={clsx(classes.colorBlob, classes.two)}></div>
      <div className={clsx(classes.colorBlob, classes.three)}></div>
      <div className={clsx(classes.colorBlob, classes.four)}></div>
      <div className={clsx(classes.colorBlob, classes.five)}></div>
      <div className={clsx(classes.colorBlob, classes.six)}></div>
    </div>
  )
}

export default Colors
