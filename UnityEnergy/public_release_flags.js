(function () {
    var existing = window.UNITY_PUBLIC_RELEASE_FLAGS || {};
    var mergedFeatures = Object.assign(
        {
            clerk_voice: true,
            maxwellian_access: true
        },
        existing.features || {}
    );

    window.UNITY_PUBLIC_RELEASE_FLAGS = Object.assign(
        {
            mode: 'public',
            hideDisabled: true,
            features: mergedFeatures
        },
        existing,
        { features: mergedFeatures }
    );

    function isFeatureEnabled(featureKey) {
        var flags = window.UNITY_PUBLIC_RELEASE_FLAGS || {};
        var features = flags.features || {};
        return features[featureKey] === true;
    }

    function disableElement(element) {
        if (!element) return;
        var hideDisabled = (window.UNITY_PUBLIC_RELEASE_FLAGS || {}).hideDisabled !== false;
        if (hideDisabled) {
            element.style.display = 'none';
            element.setAttribute('aria-hidden', 'true');
            element.setAttribute('tabindex', '-1');
            return;
        }
        if (element.tagName === 'A') {
            element.removeAttribute('href');
            element.style.pointerEvents = 'none';
        } else {
            element.disabled = true;
        }
        element.classList.add('is-feature-disabled');
        element.setAttribute('aria-disabled', 'true');
    }

    function applyUnityPublicReleaseGates(root) {
        var scope = root || document;
        var gatedElements = scope.querySelectorAll('[data-feature-gate]');
        gatedElements.forEach(function (element) {
            var gate = element.getAttribute('data-feature-gate');
            if (!gate) return;
            if (!isFeatureEnabled(gate)) {
                disableElement(element);
            }
        });
    }

    window.isUnityFeatureEnabled = isFeatureEnabled;
    window.applyUnityPublicReleaseGates = applyUnityPublicReleaseGates;

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            applyUnityPublicReleaseGates(document);
        });
    } else {
        applyUnityPublicReleaseGates(document);
    }
})();
