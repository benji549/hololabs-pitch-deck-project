# Animated guest flow on the room diagram (slide 7)

Add a looping animation to the room diagram that shows groups of guests moving through the rooms, at a scale of 1 second = 5 minutes of real time.

## Behaviour

Each group is 6 dots in its own colour. Dots move smoothly between zones on each 2-second beat.

```text
Beat      MR (entry)   VR left    VR right   Motion seats   Exit
T0-2      G1
T2-4      G2           G1
T4-6      G3                      G2         G1
T6-8      G4           G3                    G2             G1
T8-10     G5                      G4         G3             G2
T10-12    G6           G5                    G4             G3
```

After T12 the diagram holds still for 3 seconds, then all dots clear and the loop restarts from T0.

One detail to confirm: the description says group 5 enters VR left at T8-10 and group 5 enters VR right at T10-12. The table above assumes the second one is group 6 (each new group alternates left/right). Say the word if it should read differently.

## Look and feel

- Dots are small circles (about 10 px), arranged in a compact 3x2 cluster inside whichever zone the group occupies, offset so they don't cover the zone labels.
- Each group gets a distinct colour drawn from the existing design tokens (primary teal plus accent hues), so groups stay visually traceable.
- Movement uses a smooth transition (roughly 0.6s ease-in-out) between zone positions; entering dots fade in, exiting dots fade out.
- Respects reduced-motion preference: if the viewer's system requests reduced motion, the diagram renders a static state without looping.

## Technical notes

- Change is contained to `src/components/slides/xr/RoomDiagram.tsx`, with the animation logic in a small sibling component (`GuestFlowOverlay.tsx`) so the diagram markup stays readable.
- Zones become positioning anchors; dot positions are computed as percentage coordinates per zone, so the animation scales correctly for both the `lg` and `sm` diagram sizes (slides 2 and 7 both use the diagram — the animation appears on both unless you want it only on slide 7).
- Timeline driven by a single `useEffect` interval stepping a beat index 0..6 plus a pause state; transitions handled by CSS transforms for smoothness.
