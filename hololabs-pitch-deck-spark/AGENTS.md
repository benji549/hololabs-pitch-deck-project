# Architecture

- Add XR slides as individual components using the existing SlideLayout and register them in xrSlideData; this keeps presentation scaling and navigation consistent.
- Keep partner-model financial figures in a shared data module with concrete tests; this prevents slide formatting changes from altering the supplied figures.