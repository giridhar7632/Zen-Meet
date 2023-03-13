import clsx from 'clsx'
import React from 'react'
import classes from './blob.module.css'

const Blobs = () => {
  return (
    <div className={clsx(classes.blobC)}>
      <div className={clsx(classes.shapeBlob)}></div>
      <div className={clsx(classes.shapeBlob, classes.one)}></div>
      <div className={clsx(classes.shapeBlob, classes.two)}></div>
      <div className={clsx(classes.shapeBlob, classes.three)}></div>
      <div className={clsx(classes.shapeBlob, classes.four)}></div>
      <div className={clsx(classes.shapeBlob, classes.five)}></div>
      <div className={clsx(classes.shapeBlob, classes.six)}></div>
    </div>
  )
}

export default Blobs
