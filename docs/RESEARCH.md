# Research and model notes

## Scope

LockDown AI investigates text-only AI-origin signals. It is not a general authorship system and does not determine whether a person used AI.

## Selected lanes

### Raw AI pattern lane

The raw lane is deployed as an experimental ONNX artifact. It is useful as an independent demonstration signal, but observed behaviour indicates that it can be overly sensitive to polished formal writing. The frontend therefore never describes its result as proof.

### Humanizer V4.8 lane

V4.8 is the selected small multi-window classifier for transformed or humanized AI text. It samples fixed windows from a document and combines text representations with structural features. It was selected using a separate calibration process and is presented with qualitative review language.

## Important limitations

- AI detectors can mistake human writing for AI-like text and vice versa.
- A low transformed-AI result does not rule out AI involvement.
- Carefully expert-edited AI was close to chance in the selected evaluation, so this is a specific disclosed weakness.
- Long text is sampled from the beginning, middle, and end rather than read in full.
- Scores are model outputs, not real-world probabilities of authorship.

## Evaluation discipline

The project treats lineage safety as essential: related prompt families must not cross train/development partitions. Calibration is kept separate from model selection, and a sealed evaluation cohort should not be used for iterative tuning.

## Next research step

The current hypothesis is that diversity and provenance quality of expert-edited training lineages are a larger bottleneck than model size. The proposed V6 experiment holds the V4.8 architecture constant while rebuilding the evidence distribution, then tests any expert-focused curriculum as a separate continuation. This is documented as future research, not a completed result.
